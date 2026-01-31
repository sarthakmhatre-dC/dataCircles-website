import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  MoreVertical,
  PictureInPicture,
  X,
  SkipForward,
  Gauge,
  Volume2,
  VolumeX,
  Volume1
} from "lucide-react";
import { cn } from "@/lib/utils";
import LightLeak from '/assets/LightLeak.png'

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// --- HELPER: Time Formatter (mm:ss) ---
const formatTime = (time) => {
  if (isNaN(time)) return "00:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

// --- COMPONENT: Custom Floating PiP Player ---
const FloatingPipPlayer = ({
  src,
  onClose,
  onNext,
  isLastSlide
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsEnded(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
      setIsPlaying(true);
    }
  }, [src]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 w-[320px] sm:w-[400px] aspect-video bg-black rounded-xl shadow-2xl border border-white/20 z-50 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 group">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onTimeUpdate={() => setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)}
        onEnded={() => { setIsPlaying(false); setIsEnded(true); }}
        onClick={togglePlay}

      />

      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1.5 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-red-500/80 transition-colors z-20 opacity-0 group-hover:opacity-100"
      >
        <X className="w-4 h-4" />
      </button>

      {isEnded && (
        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 z-10 fade-in duration-300">
          <p className="text-white font-medium">Video Finished</p>
          <div className="flex gap-3">
            <button onClick={onClose} className="px-4 py-2 bg-white/10 rounded-full text-sm text-white hover:bg-white/20">Close</button>
            {!isLastSlide && (
              <button onClick={onNext} className="px-4 py-2 bg-blue-600 rounded-full text-sm text-white hover:bg-blue-700 flex items-center gap-2">
                Next Video <SkipForward className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {!isEnded && (
        <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay}>
              {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
            </button>
            <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- COMPONENT: In-Slide Video Player ---
const SlideVideoPlayer = ({
  item,
  isActive,
  isVisible80,
  isPipActive,
  onEnablePip
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(1); // 1 is 100% volume
  const [isMuted, setIsMuted] = useState(false);

  // Interaction States
  const [showControls, setShowControls] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // --- LOGIC: Smart Autoplay/Pause ---
  useEffect(() => {
    if (!videoRef.current || isPipActive) return;

    if (isActive && isVisible80) {
      videoRef.current.play().catch(() => { });
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(false);
    }
  }, [isActive, isVisible80, isPipActive]);

  // --- HANDLERS: Visibility (Mouse & Touch) ---
  const handleInteractStart = () => {
    setShowControls(true);
  };

  const handleInteractEnd = () => {
    setShowControls(false);
    setShowMenu(false); // Close menu when leaving area
  };

  // --- HANDLER: Video Controls ---
  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const val = parseFloat(e.target.value);
    const newTime = (val / 100) * duration;
    videoRef.current.currentTime = newTime;
    setProgress(val);
  };

  const cycleSpeed = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const speeds = [1, 1.5, 2];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const newSpeed = speeds[nextIdx];
    videoRef.current.playbackRate = newSpeed;
    setPlaybackSpeed(newSpeed);
    // Keep menu open so user sees change, or close it? usually keep open or let user click out
  };

  const handleVolumeChange = (e) => {
    e.stopPropagation();
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRef.current.muted = newMutedState;
    if (newMutedState) setVolume(0);
    else {
      setVolume(1);
      videoRef.current.volume = 1;
    }
  };

  // PiP Placeholder
  if (isPipActive && isActive) {
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center border border-white/10">
        <div className="text-center">
          <PictureInPicture className="w-12 h-12 text-blue-500 mx-auto mb-2 opacity-80" />
          <p className="text-gray-400 text-sm">Playing in Mini Player...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-full bg-black group/video cursor-pointer"
      onMouseEnter={handleInteractStart}
      onMouseLeave={handleInteractEnd}
      onTouchStart={handleInteractStart} // Mobile: Touch triggers controls
      onClick={(e) => {
        // Fallback: If controls were hidden and user clicks, show them.
        // If they were shown, this click might be handled by children or ignored here.
        if (!showControls) setShowControls(true);
      }}
    >
      <video
        ref={videoRef}
        src={item.video}
        className="w-full h-full object-cover"
        onTimeUpdate={() => {
          if (!videoRef.current) return;
          setCurrentTime(videoRef.current.currentTime);
          setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
        }}
        onLoadedMetadata={(e) => {
          setDuration(e.target.duration);
          // Ensure video starts with the current state volume
          e.target.volume = volume;
          e.target.muted = isMuted;
        }}
        onEnded={() => setIsPlaying(false)}
        loop
        muted={isMuted}
        playsInline
        onClick={togglePlay} // Clicking video surface toggles play
      />

      {/* --- TEXT INFO OVERLAY --- */}
      {/* Logic: Hidden when controls are visible, Visible when controls are hidden */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col items-start justify-end pointer-events-none transition-all duration-300 z-10",
          showControls ? "opacity-0 translate-y-4 invisible" : "opacity-100 translate-y-0 visible bg-linear-to-t from-black/80 via-black/40 to-transparent"
        )}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg mb-2">
          {item.name}
        </h2>
        {item.role && (
          <div className="mb-3">
            <span className="font-medium para-1 py-0.5 rounded">
              {item.role}
            </span>
          </div>
        )}
        <div className={cn("overflow-hidden transition-all duration-500", isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0")}>
          <p className="text-gray-200 text-sm md:text-base max-w-lg leading-relaxed block">
            {item.description}
          </p>
        </div>
      </div>

      {/* --- CONTROLS OVERLAY --- */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col justify-end transition-all duration-300 z-20 bg-black/40",
          showControls ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Center Play Button */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          onClick={togglePlay}
        >
          {!isPlaying && (
            <div className="bg-white/20 backdrop-blur-md p-5 rounded-full hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-10 h-10 text-white fill-current" />
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div
          className="px-6 pb-6 pt-20 bg-linear-to-t from-black via-black/80 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress Slider */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:h-2 transition-all mb-4"
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="text-white hover:text-blue-400 transition-colors">
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
              </button>

              <span className="text-xs font-mono text-gray-300 tracking-wider">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Menu (Action) */}

              {/* --- Volume Control --- */}
              <div className="flex items-center gap-2 group/volume mr-2">
                <button onClick={toggleMute} className="text-white hover:text-blue-400 transition-colors">
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-5 h-5" />
                  ) : volume < 0.5 ? (
                    <Volume1 className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>

                {/* Slider that appears/expands on hover */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <MoreVertical className="w-5 h-5 text-white" />
                </button>

                {showMenu && (
                  <div className="absolute bottom-full right-0 mb-2 w-52 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl overflow-hidden z-30 animate-in fade-in zoom-in duration-200">
                    <div className="py-1">

                      {/* Playback Speed - Moved Inside Action Menu */}
                      <button
                        onClick={cycleSpeed}
                        className="w-full px-4 py-3 text-left text-sm text-gray-200 hover:bg-white/10 flex items-center justify-between"
                      >
                        <span className="flex items-center gap-2">
                          <Gauge className="w-4 h-4" /> Speed
                        </span>
                        <span className="font-mono text-blue-400">{playbackSpeed}x</span>
                      </button>

                      {/* PiP Button */}
                      <button onClick={onEnablePip} className="w-full px-4 py-3 text-left text-sm text-gray-200 hover:bg-white/10 flex items-center gap-2">
                        <PictureInPicture className="w-4 h-4" /> Picture in Picture
                      </button>

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function VideoTestimonialSwiper({
  tag = "Real Businesses. Real Results.",
  title = "DataCircles replaced 3 tools for us.",
  subtitle = "Founders, accountants, and agency owners trust DataCircles to stay on top of sales and money without the stress of complex software.",
  videos = [],
}) {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible80, setIsVisible80] = useState(false);
  const [pipActive, setPipActive] = useState(false);

  // Intersection Observer for 80% Visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible80(entry.intersectionRatio >= 0.8);
      },
      { threshold: 0.8 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => { if (containerRef.current) observer.unobserve(containerRef.current); };
  }, []);

  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  }, []);

  const handlePipNext = () => handleNext();
  const handlePipClose = () => setPipActive(false);

  return (
    <section className="w-full bg-transparent text-white pb-30 flex flex-col items-center relative z-10">

      {/* <img
        src={LightLeak}
        alt=""
        className="absolute top-0 left-0 w-[1000rem] h-[1000rem] -translate-x-1/4 -translate-y-1/2 object-contain opacity-100 pointer-events-none mix-blend-screen z-100"
      /> */}

      {/* HEADER */}
      <div className="w-full max-w-7xl px-6 lg:px-0 mb-10 z-10 relative pt-10">
        <p className="para-1 text-blue-500 font-medium mb-8 tracking-wide">{tag}</p>
        <h2 className="heading-3 mb-8 tracking-tight text-white ">{title}</h2>
        <p className="text-gray-400 para-1 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>

      {/* SWIPER CONTAINER */}
      <div ref={containerRef} className="w-full max-w-6xl relative">
        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={20}
          grabCursor={true}
          speed={600}
          className="w-full overflow-visible!"
        >
          {videos.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <SwiperSlide
                key={idx}
                className="w-[85%] md:w-[70%] transition-all duration-300"
              >
                <div
                  className={cn(
                    "relative w-full aspect-video max-h-[500px] rounded-xl overflow-hidden transition-all duration-500 ease-out border border-white/10 shadow-2xl bg-[#111]",
                    isActive
                      ? "opacity-100 scale-100 ring-1 ring-white/10 z-10"
                      : "opacity-40 scale-[0.90] grayscale hover:opacity-60 z-0"
                  )}
                >
                  <SlideVideoPlayer
                    item={item}
                    isActive={isActive}
                    isVisible80={isVisible80}
                    isPipActive={pipActive && isActive}
                    onEnablePip={() => setPipActive(true)}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="w-full max-w-6xl mx-auto mt-6 flex justify-end gap-3 z-10">
        <button onClick={handlePrev} disabled={activeIndex === 0} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-30 transition-all">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={handleNext} disabled={activeIndex === videos.length - 1} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 disabled:opacity-30 transition-all">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* GLOBAL PIP PLAYER */}
      {pipActive && videos[activeIndex] && (
        <FloatingPipPlayer
          src={videos[activeIndex].video}
          onClose={handlePipClose}
          onNext={handlePipNext}
          isLastSlide={activeIndex === videos.length - 1}
        />
      )}

    </section>
  );
}