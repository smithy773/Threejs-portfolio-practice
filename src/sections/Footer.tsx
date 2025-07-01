import { socialImgs } from "../constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w-full">
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
