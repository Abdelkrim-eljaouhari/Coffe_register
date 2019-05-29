import React from "react";
import CoffeType from "../components/cofeType";
import CoffeDescription from "../components/cofeDescription";
class homePage extends React.Component {
  state = {
    pictures: [
      {
        name: "Americano",
        price: 14,
        image:
          "https://www.homegrounds.co/wp-content/uploads/2018/01/americano-e1522545816957.jpg",
        description: `American coffee is a type of coffee drink prepared by diluting an espresso with hot water,
giving it a similar strength to, but different flavor`
      },
      {
        name: "Expresso",
        price: 12,
        image:
          "https://javryproduction.s3.amazonaws.com/pictures/files/000/000/029/thumb/espresso-expresso.jpg?1506696424",
        description:
          "Espresso is coffee of Italian origin, brewed by expressing or forcing a small amount of nearly boiling water under pressure through finely ground coffee beans"
      },
      {
        name: "Cappuccino",
        price: 10,
        image:
          "https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Cappuccino-OL.jpg",
        description:
          "Variations of the drink involve the use of cream instead of milk, and flavoring with cinnamon or chocolate powder"
      },
      {
        name: "Con pana",
        price: 8,
        image:
          "https://drinks.seriouseats.com/images/20110825-con-panna-500.jpg",
        description:
          "Espresso con panna, which means espresso with cream in Italian,is a single or double shot of espresso topped with whipped cream."
      },
      {
        name: "Coffe latte",
        price: 9,
        image:
          "https://coffeecorner.com/wp-content/uploads/2018/01/Spice-Latte.jpg",
        description: `Flat white coffee is usually served in coffee shops. It is the same coffee on which latte art is made. Flat white is made with equal proportions of 
            coffee espresso and thick milk. A sweetener like sugar or brown sugar is then added`
      },
      {
        name: "Turkich coffe",
        price: 16,
        image:
          "https://www.thespruceeats.com/thmb/3xTFm3WEf15Sx0glF01ckkrEPxc=/1500x998/filters:fill(auto,1)/turkish-coffee-recipe-2355497-36-5b3fd0e646e0fb003765c774.jpg",
        description:
          "Turkish coffee is generally served with a glass of water and lokum. To make Turkish coffee, grounds of coffee beans are finely powdered and immersed in water which is then heated until it boils. This way, the foam will be maximum. \n Once this is done, sugar is added to it in good quantity."
      }
    ],
    index: 0
  };

  handleIndexChange = element => {
    let index;
    this.state.pictures.map((picture, i) => {
      if (
        picture.name ===
        element
          .match(/^\D*/g)
          .toString()
          .trim()
      ) {
        index = i;
      }
    });
    if (typeof index === "number") {
      this.setState({ index });
    }
  };
  render() {
    return (
      <>
        <CoffeType handleIndexChange={this.handleIndexChange} />
        <CoffeDescription state={this.state} />
      </>
    );
  }
}
export default homePage;
