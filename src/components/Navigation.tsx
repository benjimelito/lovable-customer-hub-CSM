import { StickyNavWrapper } from "./StickyNavWrapper";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <StickyNavWrapper className={className}>
      <div className="flex w-full items-center justify-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/images/lovable-logo-text-light.svg"
            alt="Lovable"
            className="h-5 w-auto"
          />
        </a>
      </div>
    </StickyNavWrapper>
  );
};

export default Navigation;
