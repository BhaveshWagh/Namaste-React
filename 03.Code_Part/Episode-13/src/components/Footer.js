import { LINKEDIN_URL } from "../constants";
const Footer = () => {
  return (
    <div className="footer mb-1">
      <div className="footer-items flex shadow-lg justify-center p-10 border rounded-xl">
        Created By 💛
        <a href={LINKEDIN_URL} target="_blank" className="px-2">
          Bhavesh Wagh
        </a>
        <div>&copy; 2023 - {new Date().getFullYear()} All Rights Reserved</div>
        <strong className="px-2">
          Foodiiiee<span>Fi</span>
        </strong>
      </div>
    </div>
  );
};

export default Footer;
