import styles from './cart.module.css';
import Link from 'next/link';
import Layout from './layout';
import CartItem from './cartitem';
import { useRef, useState } from 'react';
import { Button, CircularProgress, TextField } from '@mui/material';
import axios from 'axios';
import MyModal from './modal';

var items = [
    { id:1,name: 'Code Complete', cost: 3.5, count: 2 },
    { id:2,name: 'Compiler: Priciples, Practices', cost: 50, count: 1 },
    { id:3,name: 'Real World Haskell', cost: 30, count: 1 }
];

export default function Cart({ children }) {
    var name = useRef('')
    var addr = useRef('')
    var phone = useRef('')
    const [items, setItems] = useState(null)
    const [successOpen, setSuccessOpen] = useState(false)
    const [failOpen, setFailOpen] = useState(false)
    console.log(items)

    if(!items && typeof window !== 'undefined'){
        
        var user_id = localStorage.getItem('user_id')
        if(user_id){
            
        axios.get('/myapi/cart',{
            params:{
                user_id: user_id
            }
        }).then((resp)=>{
            if(resp.data.status == 'Ok')
                setItems(resp.data.cartItems)
        })}
        
        
    }

    function createOrder(user_id,name,addr,phone){
         axios.get('/myapi/order/create', {
            params:{
                user_id:user_id,
                name:name,
                addr:addr,
                phone:phone
            }
        }).then(resp=>{
            if (resp.data.status=='Ok')
                setSuccessOpen(true)
            else
                setFailOpen(true)
        }).catch(e=>{
            setFailOpen(true)
        })
    }

    function removeItem(user_id, product_id){
        console.log(`removing: ${user_id} - ${product_id}`)
        axios.get('/myapi/cart/remove',{
            params:{
                user_id,
                product_id,
            }
        })
        setItems(null)
    }
    function CartList({ items}) {
        const rows = [];
        let lastCategory = null;
      
        items.forEach((item) => {
          rows.push(
                  <CartItem item={item} onRemoveItem={removeItem}></CartItem>
          );
        });

        return (
            <div className={styles.cart}>
            {rows}
            </div>
          );
        }

        if(typeof window !== 'undefined')
            var user_id = localStorage.getItem('user_id')

    return <div className={styles.cart}>
        <h1>Cart</h1>
        {items?<>{items.length==0?<div>Empty Cart</div>:<><CartList className={styles.cart} items={items} />
        <div><TextField label="???????????????" inputRef={name}/></div>
        <div><TextField label="????????????" inputRef={addr}/></div>
        <div><TextField label="????????????" inputRef={phone}/></div>
        
            <Button variant='contained' onClick={()=>{
               createOrder(user_id,name.current.value, addr.current.value,phone.current.value) 
       
       }}>?????????????????????</Button>


       
        <MyModal open={successOpen}>
            ??????????????????<br/>
            <Button variant='contained' onClick={()=>{setSuccessOpen(false);setItems(null);}}>???</Button>
       </MyModal>
       <MyModal open={failOpen}>
            ??????????????????<br/>
            <Button variant='contained' onClick={()=>setFailOpen(false)}>???</Button>
       </MyModal>
       </>}

               </>:
        
        <>
        <CircularProgress/>
        </>}
        
    </div>;
}