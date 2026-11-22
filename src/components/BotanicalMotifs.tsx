import React, { useState } from 'react';
import { PawPrint } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel = 'Wag & Willow',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#DAD7CD] via-[#F5F0E8] to-[#A3B18A]/40 text-[#344E41] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <PawPrint className="w-8 h-8 mb-2 opacity-60" strokeWidth={1.5} />
        <span className="font-serif italic text-sm opacity-80">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

export const WillowBranchSvg: React.FC<{ className?: string }> = ({ className = 'w-24 h-24' }) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 102C36 78 58 50 96 18"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
    />
    <path
      d="M42 74C30 66 26 52 34 42C44 46 50 60 42 74Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M54 60C66 64 78 58 84 46C72 42 60 48 54 60Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M68 44C58 34 58 22 66 14C74 20 76 34 68 44Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path
      d="M84 30C94 34 104 30 108 20C98 16 88 20 84 30Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <circle cx="98" cy="16" r="2.2" fill="currentColor" opacity="0.65" />
  </svg>
);

export const BotanicalSprigHorizontal: React.FC<{ className?: string }> = ({
  className = 'w-16 h-6',
}) => (
  <svg
    viewBox="0 0 80 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 12H74" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    <path
      d="M28 12C24 6 18 4 14 6C16 11 22 13 28 12Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <path
      d="M48 12C52 18 58 20 62 18C60 13 54 11 48 12Z"
      stroke="currentColor"
      strokeWidth="1.1"
    />
    <circle cx="74" cy="12" r="2" fill="currentColor" />
  </svg>
);

export const GentlePawSvg: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="9.5" cy="11.5" rx="2.6" ry="3.5" transform="rotate(-14 9.5 11.5)" />
    <ellipse cx="16" cy="8.5" rx="2.5" ry="3.4" />
    <ellipse cx="22.5" cy="11.5" rx="2.6" ry="3.5" transform="rotate(14 22.5 11.5)" />
    <ellipse cx="6.2" cy="17.5" rx="2.2" ry="3" transform="rotate(-24 6.2 17.5)" />
    <path d="M16 14.2C12.2 14.2 9.4 17.5 9.8 21.1C10.1 23.6 12.1 25 14.1 24.4C15.2 24.1 16.8 24.1 17.9 24.4C19.9 25 21.9 23.6 22.2 21.1C22.6 17.5 19.8 14.2 16 14.2Z" />
  </svg>
);

export const AnimatedPawTrail: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`inline-flex items-center gap-2.5 ${className}`} aria-hidden="true">
    <GentlePawSvg className="w-4 h-4 -rotate-12 animate-paw-1" />
    <GentlePawSvg className="w-4 h-4 rotate-6 translate-y-1 animate-paw-2" />
    <GentlePawSvg className="w-4 h-4 -rotate-6 animate-paw-3" />
  </div>
);

export const PillarIllustration: React.FC<{
  motif: 'leaf' | 'paw' | 'sprout';
  className?: string;
}> = ({ motif, className = 'w-11 h-11' }) => {
  if (motif === 'sprout') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <path
          d="M24 40V18M24 26C16 26 11 20 12 13C19 13 24 18 24 26ZM24 22C32 22 37 16 36 9C29 9 24 14 24 22Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 40H32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (motif === 'paw') {
    return (
      <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
        <ellipse cx="15" cy="18" rx="3" ry="4.2" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="24" cy="13" rx="3" ry="4.2" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="33" cy="18" rx="3" ry="4.2" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M24 22C18.5 22 14.5 26.5 15 31.8C15.4 35.4 18.2 37.2 21 36.2C22.8 35.6 25.2 35.6 27 36.2C29.8 37.2 32.6 35.4 33 31.8C33.5 26.5 29.5 22 24 22Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 36C14 22 24 12 38 10C36 24 26 34 12 36Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M10 38C18 30 26 22 34 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const WeekMotifIllustration: React.FC<{
  motif: 'acorn' | 'compass' | 'collar' | 'leash' | 'butterfly' | 'ribbon';
  className?: string;
}> = ({ motif, className = 'w-10 h-10' }) => {
  switch (motif) {
    case 'acorn':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 20C12 14.5 16.5 11 22 11C27.5 11 32 14.5 32 20H12Z"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          <path d="M22 11V7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
          <path
            d="M14 20V25C14 31 18 35 22 37C26 35 30 31 30 25V20"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'compass':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <circle cx="22" cy="22" r="14" stroke="currentColor" strokeWidth="1.35" />
          <path
            d="M27 17L24 24L17 27L20 20L27 17Z"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'collar':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <ellipse cx="22" cy="18" rx="13" ry="6.5" stroke="currentColor" strokeWidth="1.35" />
          <circle cx="22" cy="29.5" r="4.5" stroke="currentColor" strokeWidth="1.35" />
          <path d="M22 24.5V25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'leash':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M11 13C11 9.5 15 9.5 16 13C17 17 12 22 16 27C20 32 27 29 31 33"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <circle cx="33" cy="34.5" r="2.5" stroke="currentColor" strokeWidth="1.35" />
        </svg>
      );
    case 'butterfly':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <path
            d="M22 16V32M22 21C16 13 9 14 10 21C11 26 17 26 22 24M22 21C28 13 35 14 34 21C33 26 27 26 22 24"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'ribbon':
      return (
        <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden="true">
          <circle cx="22" cy="18" r="8" stroke="currentColor" strokeWidth="1.35" />
          <path
            d="M17 24.5L14 36L22 32.5L30 36L27 24.5"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};
