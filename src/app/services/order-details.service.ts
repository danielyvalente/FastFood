import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() {}



  foodDetails = [
    {
      id:1,
      foodName:"X Burguer",
      foodDetails:"Pão | Hamburguer | Queijo | Ketchup | Maionese",
      foodPrice:12,
      foodImg:"https://images.pexels.com/photos/4080534/pexels-photo-4080534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:2,
      foodName:"X Bacon",
      foodDetails:"Pão | Hamburguer | Queijo | Bacon | Ketchup | Maionese",
      foodPrice:14,
      foodImg:"https://images.pexels.com/photos/10671472/pexels-photo-10671472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:3,
      foodName:"X Salada",
      foodDetails:"Pão | Hamburguer | Alface | Tomate | Queijo | Ketchup | Maionese",
      foodPrice:12,
      foodImg:"https://images.pexels.com/photos/2271099/pexels-photo-2271099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:4,
      foodName:"Vegetariano",
      foodDetails:"Pão | Hamburguer Vegetariano | Alface | Tomate | Cebola | Picles",
      foodPrice:15,
      foodImg:"https://images.pexels.com/photos/918581/pexels-photo-918581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:5,
      foodName:"X Frango Salada",
      foodDetails:"Pão | Frango | Alface | Tomate | Queijo | Ketchup | Maionese",
      foodPrice:14,
      foodImg:"https://images.pexels.com/photos/8130700/pexels-photo-8130700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
      id:6,
      foodName:"X Burguer Double",
      foodDetails:"Pão | 2 Hamburguer | Queijo | Ketchup | Maionese",
      foodPrice:16,
      foodImg:"https://images.pexels.com/photos/3915907/pexels-photo-3915907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
}
