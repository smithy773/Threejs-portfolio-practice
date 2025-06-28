export default function Button({
  className,
  id,
  text,
}: {
  className: string;
  id: string;
  text: string;
}) {
  return (
    <a className={`${className ?? ""} cta-wrapper`} id={`${id ?? ""}`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arror" />
        </div>
      </div>
    </a>
  );
}
