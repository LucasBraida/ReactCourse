import React, { useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const count = useRef(0)
    function merge(s1=[],s2=[]){
        const result= []
        while(s1.length >0 || s2.length >0){
            if(s1.length >0){
                result.push(s1.shift())
            }
            if(s2.length >0){
                result.push(s2.shift())
            }
        }
        return result
    }
    const str = "bbbbbbb"
    const str2 = "aaa"
    count.current = count.current +1
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício 1"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge([...value1], ["*","*","*","*","*"])} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
