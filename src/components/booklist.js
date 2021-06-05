import React,{useContext} from 'react';
import Book from './book';
import {BookContext} from '../App';
const Booklist=()=> {
    const kitaplar = useContext(BookContext);
        return(
            <div className="row">
                {kitaplar.map((kitaplar,index)=>{
                       return(
                        <Book hedef={index} key={index} name={kitaplar.name} yazar={kitaplar.author} 
                        link={kitaplar.link} slogan={kitaplar.slogan}/>
                       )
                })}
            </div>
        )
}
export default Booklist;