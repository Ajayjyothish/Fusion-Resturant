import React from 'react'
import { directive } from '@babel/types';
import { Media, Card, CardImg ,CardImgOverlay, CardText,CardBody,CardTitle } from 'reactstrap'
import DishDetail from './DishDetailComponent'


   function RenderMenuItem({ dish , onClick }){
       return(
        <Card onClick={() => onClick(dish.id)}>
                        
        <CardImg width='100%' src={dish.image} alt={dish.name}></CardImg>
    
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>
       )
   }

    const Menu = (props) => {   
        const menu = props.dishes.map(item => {
            return ( 
                <div key={item.id} className='col-12 col-md-5 m-1'>
                   <RenderMenuItem dish={item} onClick={props.onClick} />
                </div>
            )
        })

        return (  
            <div className="container">
                <div className='row'>
                    
                        {menu}
                    
                </div>
                
               
                
            </div>
         );
    }
    


export default Menu 