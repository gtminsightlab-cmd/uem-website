type VideoShowcaseProps = {
  title: string;
  description: string;
  src: string;
  poster: string;
  captions: string;
  duration: string;
  status: string;
};

export default function VideoShowcase({title, description, src, poster, captions, duration, status}: VideoShowcaseProps) {
  return (
    <article className="overflow-hidden border border-white/15 bg-white/[0.045]">
      <div className="relative aspect-video bg-ink">
        <video className="h-full w-full" controls preload="metadata" poster={poster} playsInline>
          <source src={src} type="video/mp4" />
          <track kind="captions" src={captions} srcLang="en" label="English" default />
          Your browser does not support embedded video.{' '}
          <a className="underline" href={src}>Download the video instead.</a>
        </video>
      </div>
      <div className="p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
          <span>{duration}</span><span aria-hidden="true">•</span><span>{status}</span>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-white md:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-white/64">{description}</p>
      </div>
    </article>
  );
}
