import graphImg from "../../assets/income-graph.png";

import classes from "./Income.module.css";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];
  return (
    <section className={classes["host-income"]}>
      <h1>Income</h1>
      <p>
        Last <span>30 days</span>
      </p>
      <h2>$2,260</h2>
      <img className={classes.graph} src={graphImg} alt="Income graph" />
      <div className={classes["info-header"]}>
        <h3>Your transactions (3)</h3>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className={classes.transactions}>
        {transactionsData.map((item) => (
          <div key={item.id} className={classes.transaction}>
            <h3>${item.amount}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
