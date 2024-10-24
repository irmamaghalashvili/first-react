import React, { useEffect, useState } from "react";
import portfolioData from "../../TimeLine/Portf.json";
import "../../Assets/styles/portfolio.css";
import { useMemo } from "react";

export default function Portfolio({ collapsed }) {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setData(portfolioData);
  }, []);

  const dispayData = useMemo(() => {
    return data.filter(
      (item) => item.type === activeTab || activeTab === "all"
    );
  }, [activeTab, data]);

  return (
    <div
      data-testid="portfolio-component"
      className={`container ${collapsed ? "collapsed" : null}`}
    >
      <h2>Portfolio</h2>
      <ul className="tabs">
        <li
          className={`tabs-item ${activeTab === "all" ? "active" : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </li>
        <li
          className={`tabs-item ${activeTab === "ui" ? "active" : ""}`}
          onClick={() => setActiveTab("ui")}
        >
          Ui
        </li>
        <li
          className={`tabs-item ${activeTab === "code" ? "active" : ""}`}
          onClick={() => setActiveTab("code")}
        >
          Code
        </li>
      </ul>

      <section className="portfolio">
        {dispayData.map((item) => (
          <article key={item.id} className="portfolio-item">
            <div
              className="image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noreferrer">
              {" "}
              view resource{" "}
            </a>
          </article>
        ))}
      </section>
    </div>
  );
}
