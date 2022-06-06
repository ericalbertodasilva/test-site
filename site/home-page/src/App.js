import "./static/css/App.css";
import ResponsiveAppBar from "./static/mui/ResponsiveAppBar";
import IntroductionSite from "./static/mui/IntroductionSite";
import DescriptionNexci from "./static/mui/DescriptionNexci";
import FooterNexci from "./static/mui/FooterNexci";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <IntroductionSite />
      <DescriptionNexci />
      <FooterNexci />
    </div>
  );
}

export default App;
