import React, { Component } from 'react'
import FCRecipes from '../Functional Comps/FCRecipes'
import FCRecipesDone from '../Functional Comps/FCRecipesDone';


const initRecipesList= [
    {id: 1, name: 'Pizza', cookingTime:15, cookingMethod:'bake', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj01Kkek1YiGGZXU94iutsz40ihtK2eUreg&usqp=CAU'},
    {id: 2, name: 'Pasta', cookingTime:20, cookingMethod:'cook', img_url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYGp2rXdVBEtXXGsCRtTYK1MC1Fxom1UcSx0t7IzN&s'},
    {id: 3, name: 'Broccoli', cookingTime:17, cookingMethod:'wash&cut', img_url:'https://media.istockphoto.com/id/1135308302/photo/broccoli-on-white.jpg?s=612x612&w=0&k=20&c=ONhL9A0yMth8m-83Z8eAwzAsDeKU81IcpZc-2rVDMJo='},

];

export default class CCMyKitchen extends Component {
    constructor(props){
        super(props)

        this.state ={
            recipesList: initRecipesList,
            eatList: [],
            recipesDoneCounter: parseInt(0)
        }  
    }

    makeRecipeToEat = (recipeid, recipename, recipecookingTime, recipecookingMethod, recipeimg) => {
        let tempreadyrecipes= [...this.state.eatList, {id: recipeid, name: recipename, cookingTime: recipecookingTime, cookingMethod: recipecookingMethod, img_url: recipeimg}]
        this.setState ({
            recipesList: this.state.recipesList.filter (recipe => recipe.id != recipeid),
            eatList: tempreadyrecipes,
            recipesDoneCounter: this.state.recipesDoneCounter+1
        });
    }

    BackRecipeToRecipesList= (recipeid, recipename, recipecookingTime, recipecookingMethod, recipeimg) => {
        let tempreadyrecipes= [...this.state.recipesList, {id: recipeid, name: recipename, cookingTime: recipecookingTime, cookingMethod: recipecookingMethod, img_url: recipeimg}]
        this.setState ({
            eatList: this.state.eatList.filter (recipe => recipe.id != recipeid),
            recipesDoneCounter: this.state.recipesDoneCounter-1,
            recipesList: tempreadyrecipes
        });
    }


  render() {
    return (
        <div className='container'> 
        <FCRecipes recipesList={this.state.recipesList} getRecipeToEat={this.makeRecipeToEat}/>
        <hr></hr>
        <FCRecipesDone eatlist= {this.state.eatList}  getIDtoRecipeslist={this.BackRecipeToRecipesList}  recipesDoneCounter={this.state.recipesDoneCounter}/>
        </div>
    )
  }
}
