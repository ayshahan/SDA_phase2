var count=0;
var order=[];
              var Carrot=document.getElementById("addCarrot");
              var Flower=document.getElementById("addFlower");
              var Cucumber=document.getElementById("addCucumber");
              var Lattuce=document.getElementById("addLattuce");
              var Parsley=document.getElementById("addParsley");
              var Rocca=document.getElementById("addRocca");

              var Apple=document.getElementById("addApple");
              var Strawberry=document.getElementById("addStrawberry");
              var Mango=document.getElementById("addMango");
              var Pineapple=document.getElementById("addPineapple");
              var Peach=document.getElementById("addPeach");
              var Orange=document.getElementById("addOrange");

              var Kinder=document.getElementById("addKinder");
              var Loacker=document.getElementById("addLoacker");
              var Malteser=document.getElementById("addMalteser");
              var Snickers=document.getElementById("addSnickers");
              var Twix=document.getElementById("addTwix");
              var Bounty=document.getElementById("addBounty");

              var AppleJuice=document.getElementById("addAppleJuice");
              var GuaveJuice=document.getElementById("addGuaveJuice");
              var MixedJuice=document.getElementById("addMixedJuice");
              var OrangeJuice=document.getElementById("addOrangeJuice");
              var PineAppleJuice=document.getElementById("addPineAppleJuice");
              var GrapeJuice=document.getElementById("addGrapeJuice");

              var Plate=document.getElementById("addPlate");
              var Spone=document.getElementById("addSpone");
              var Tissues=document.getElementById("addTissues");
              var Fork=document.getElementById("addFork");
              var Foil=document.getElementById("addFoil");
              var ButterPaper=document.getElementById("addButterPaper");

              var TomatoPaste=document.getElementById("addTomatoPaste");
              var Spaghetti=document.getElementById("addSpaghetti");
              var Rise=document.getElementById("addRise");
              var Mayonnaise=document.getElementById("addMayonnaise");
              var Ketchup=document.getElementById("addKetchup");
              var Oile=document.getElementById("addOile");
          
              var countCar=document.getElementById("count");

          countCar.innerText=count;
          Carrot.onclick=addCount;
          Flower.onclick=addCount;
          Cucumber.onclick=addCount;
          Lattuce.onclick=addCount;
          Parsley.onclick=addCount;
          Rocca.onclick=addCount;

          Apple.onclick=addCount;
          Strawberry.onclick=addCount;
          Mango.onclick=addCount;
          Pineapple.onclick=addCount;
          Peach.onclick=addCount;
          Orange.onclick=addCount;

          Kinder.onclick=addCount;
          Loacker.onclick=addCount;
          Malteser.onclick=addCount;
          Snickers.onclick=addCount;
          Twix.onclick=addCount;
          Bounty.onclick=addCount;

          AppleJuice.onclick=addCount;
          GuaveJuice.onclick=addCount;
          MixedJuice.onclick=addCount;
          OrangeJuice.onclick=addCount;
          PineAppleJuice.onclick=addCount;
          GrapeJuice.onclick=addCount;

          Plate.onclick=addCount;
          Spone.onclick=addCount;
          Tissues.onclick=addCount;
          Fork.onclick=addCount;
          Foil.onclick=addCount;
          ButterPaper.onclick=addCount;

          TomatoPaste.onclick=addCount;
          Spaghetti.onclick=addCount;
          Rise.onclick=addCount;
          Mayonnaise.onclick=addCount;
          Ketchup.onclick=addCount;
          Oile.onclick=addCount;


        
          function addCount(){
              let idButtoun=this.id;
            count+=parseInt(document.getElementById('count1').value);
            countCar.innerText=count
            switch(idButtoun){
              case 'addCarrot':
                alert("Item add Successfully");
               let item=document.getElementById('item1').innerHTML;
               let priceFiled=document.getElementById("price1").innerHTML;
               let arrPric=priceFiled.split(':');
               let counter=parseInt(document.getElementById('count1').value);
               let priceite=parseInt(arrPric[1]);
               order.push(
                 {
                   itemName:item,
                   price:priceite, 
                   count:counter,
                 }
               );
               console.log(order);
              break;


              case 'addFlower':
                 alert("Item add Successfully");
                let item2=document.getElementById('item2').innerHTML;
                let priceFiled2=document.getElementById("price2").innerHTML;
                let arrPric2=priceFiled2.split(':');
                let counter2=parseInt(document.getElementById('count2').value);
                let priceite2=parseInt(arrPric2[1]);
                order.push(
                  {
                    itemName:item2,
                    price:priceite2,
                    count:counter2,
                  }
                );
                console.log(order); 

              break;
              case'addCucumber':
                alert("Item add Successfully");
              let item3=document.getElementById('item3').innerHTML;
              let priceFiled3=document.getElementById("price3").innerHTML;
              let arrPric3=priceFiled3.split(':');
              let counter3=parseInt(document.getElementById('count3').value);
              let priceite3=parseInt(arrPric3[1]);
              order.push(
                {
                  itemName:item3,
                  price:priceite3,
                  count:counter3,
                }
              );
              console.log(order); 

              break;
              case 'addLattuce':
                alert("Item add Successfully");
                let item4=document.getElementById('item4').innerHTML;
                let priceFiled4=document.getElementById("price4").innerHTML;
                let arrPric4=priceFiled4.split(':');
                let counter4=parseInt(document.getElementById('count4').value);
                let priceite4=parseInt(arrPric4[1]);
                order.push(
                  {
                    itemName:item4,
                    price:priceite4,
                    count:counter4,
                  }
                );
                console.log(order); 

              break;
              case 'addParsley':
                alert("Item add Successfully");
                let item5=document.getElementById('item5').innerHTML;
                let priceFiled5=document.getElementById("price5").innerHTML;
                let arrPric5=priceFiled5.split(':');
                let counter5=parseInt(document.getElementById('count5').value);
                let priceite5=parseInt(arrPric5[1]);
                order.push(
                  {
                    itemName:item5,
                    price:priceite5,
                    count:counter5,
                  }
                );
                console.log(order); 

                break;
                case 'addRocca':
                   alert("Item add Successfully");
                  let item6=document.getElementById('item6').innerHTML;
                  let priceFiled6=document.getElementById("price6").innerHTML;
                  let arrPric6=priceFiled6.split(':');
                  let counter6=parseInt(document.getElementById('count6').value);
                  let priceite6=parseInt(arrPric6[1]);
                  order.push(
                    {
                      itemName:item6,
                      price:priceite6,
                      count:counter6,
                    }
                  );
                  console.log(order); 
  
                  break;
                  case 'addApple':;
                     alert("Item add Successfully")
                    let item7=document.getElementById('item7').innerHTML;
                    let priceFiled7=document.getElementById("price7").innerHTML;
                    let arrPric7=priceFiled7.split(':');
                    let counter7=parseInt(document.getElementById('count7').value);
                    let priceite7=parseInt(arrPric7[1]);
                    order.push(
                      {
                        itemName:item7,
                        price:priceite7,
                        count:counter7,
                      }
                    );
     
                    console.log(order); 
    
                    break;
                case 'addStrawberry':

                   alert("Item add Successfully");
                  let item8=document.getElementById('item8').innerHTML;
                  let priceFiled8=document.getElementById("price8").innerHTML;
                  let arrPric8=priceFiled8.split(':');
                  let counter8=parseInt(document.getElementById('count8').value);
                  let priceite8=parseInt(arrPric8[1]);
                  order.push(
                    {
                      itemName:item8,
                      price:priceite8,
                      count:counter8,
                    }
                  );
   
                  console.log(order); 
  

                break;
                case 'addMango':
                   alert("Item add Successfully");
                  let item9=document.getElementById('item9').innerHTML;
                  let priceFiled9=document.getElementById("price9").innerHTML;
                  let arrPric9=priceFiled9.split(':');
                  let counter9=parseInt(document.getElementById('count9').value);
                  let priceite9=parseInt(arrPric9[1]);
                  order.push(
                    {
                      itemName:item9,
                      price:priceite9,
                      count:counter9,
                    }
                  );
   
                  console.log(order); 
  
                  break;
 
                  case 'addPineapple':
                     alert("Item add Successfully");
                    let item10=document.getElementById('item10').innerHTML;
                    let priceFiled10=document.getElementById("price10").innerHTML;
                    let arrPric10=priceFiled10.split(':');
                    let counter10=parseInt(document.getElementById('count10').value);
                    let priceite10=parseInt(arrPric10[1]);
                    order.push(
                      {
                        itemName:item10,
                        price:priceite10,
                        count:counter10,
                      }
                    );
     
                    console.log(order); 
    
                  break;
                  case 'addPeach':
                   alert("Item add Successfully");
                  let item11=document.getElementById('item11').innerHTML;
                    let priceFiled11=document.getElementById("price11").innerHTML;
                    let arrPric11=priceFiled11.split(':');
                    let counter11=parseInt(document.getElementById('count11').value);
                    let priceite11=parseInt(arrPric11[1]);
                    order.push(
                      {
                        itemName:item11,
                        price:priceite11,
                        count:counter11,
                      }
                    );
     
                    console.log(order);
                    break;
                    case 'addOrange':
                     alert("Item add Successfully");
                    let item12=document.getElementById('item12').innerHTML;
                    let priceFiled12=document.getElementById("price12").innerHTML;
                    let arrPric12=priceFiled12.split(':');
                    let counter12=parseInt(document.getElementById('count12').value);
                    let priceite12=parseInt(arrPric12[1]);
                    order.push(
                      {
                        itemName:item12,
                        price:priceite12,
                        count:counter12,
                      }
                    );
     
                    console.log(order);
                      break;
            }
              let orders=[]; 
            order.forEach(item=>{
              let c=JSON.stringify(item);
              let b=JSON.parse(c);
              console.log("ss "+b.price);
              orders.push(b.itemName+"-"+b.count+"-"+b.price);
            })
                 console.log(orders);
            localStorage.setItem("orders",JSON.stringify(orders));
           

          }

          