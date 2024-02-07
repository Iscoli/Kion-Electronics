import styles from "../component/SectionOne.module.scss";
import Swipper from "../molecules/Swipper";
import Navbar from "../molecules/Navbar";

function YourComponent() {
  return (
    <header className={styles.mainHeader}>
      <Navbar />
      <Swipper />
    </header>
  );
}

export default YourComponent;
