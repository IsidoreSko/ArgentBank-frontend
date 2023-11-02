import React from "react";
import iconChat from "../Assets/Images/icon-chat.webp";
import iconMoney from "../Assets/Images/icon-money.webp";
import iconSecurity from "../Assets/Images/icon-security.webp";

const featuresData = [
  {
    id: "1",
    title: "You are our #1 priority",
    img: iconChat,
    content:
      "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    id: "2",
    title: "More savings means higher rates",
    img: iconMoney,
    content:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    id: "3",
    title: "Your money is secure",
    img: iconSecurity,
    content:
      "We use top-of-the-line encryption to make sure your data and money are always safe.",
  },
];

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <div className="feature-item" key={feature.id}>
          <img src={feature.img} alt={feature.title} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.content}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
