import { useEffect } from "react";
import styles from "./Skills.module.scss";

import { 
  HtmlIcon, 
  CssIcon, 
  JavaScriptIcon, 
  ReactIcon, 
  ReduxIcon, 
  FirebaseIcon, 
  NodeJsIcon, 
  ExpressIcon, 
  MongoDBIcon, 
  GraphQLIcon, 
  BootstrapIcon,
  TypeScriptIcon,
  PostmanIcon,
  ReactRouterIcon,
  NextJsIcon,
  StripeIcon,
  GitIcon,
  JQueryIcon,
  GitHubIcon,
  LessIcon 
} from "../SVG/Icons";

import AOS from "aos";
import { useTranslation } from "react-i18next";

const About = ({ id }) => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  });
  return (
    <section
      className={styles.container}
      id={id}
      data-aos='fade-up'
      data-aos-duration='1500'
    >
      <h2 className={styles.header}>{t("skills")}</h2>
      <section className={styles["icons-container"]}>
        <figure className={styles.card}>
          <span>HTML</span>
          <HtmlIcon />
        </figure>
        <figure className={styles.card}>
          <span>CSS</span>
          <CssIcon />
        </figure>
        <figure className={styles.card}>
          <span>JavaScript</span>
          <JavaScriptIcon />
        </figure>
        <figure className={styles.card}>
          <span>React</span>
          <ReactIcon />
        </figure>
        <figure className={styles.card}>
          <span>Redux</span>
          <ReduxIcon />
        </figure>
        <figure className={styles.card}>
          <span>Firebase</span>
          <FirebaseIcon />
        </figure>
        <figure className={styles.card}>
          <span>Node.js</span>
          <NodeJsIcon />
        </figure>
        <figure className={styles.card}>
          <span>Express</span>
          <ExpressIcon />
        </figure>
        <figure className={styles.card}>
          <span>MongoDB</span>
          <MongoDBIcon />
        </figure>
        <figure className={styles.card}>
          <span>GraphQL</span>
          <GraphQLIcon />
        </figure>
        <figure className={styles.card}>
          <span>Bootstrap</span>
          <BootstrapIcon />
        </figure>
        <figure className={styles.card}>
          <span>TypeScript</span>
          <TypeScriptIcon />
        </figure>
        <figure className={styles.card}>
          <span>Postman</span>
          <PostmanIcon />
        </figure>
        <figure className={styles.card}>
          <span>ReactRouter</span>
          <ReactRouterIcon />
        </figure>
        <figure className={styles.card}>
          <span>NextJs</span>
          <NextJsIcon />
        </figure>
        <figure className={styles.card}>
          <span>Stripe</span>
          <StripeIcon />
        </figure>
        <figure className={styles.card}>
          <span>Git</span>
          <GitIcon />
        </figure>
        <figure className={styles.card}>
          <span>JQuery</span>
          <JQueryIcon />
        </figure>
        <figure className={styles.card}>
          <span>GitHub</span>
          <GitHubIcon />
        </figure>
        <figure className={styles.card}>
          <span>Less</span>
          <LessIcon />
        </figure>
      </section>
    </section>
  );
};

export default About;
