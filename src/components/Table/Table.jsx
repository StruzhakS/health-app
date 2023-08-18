import React from 'react';
import icon from '../../assets/icons/symbol-defs.svg';
import s from './Table.module.css';


const Table = ()=>{
    return(
        <>
        <table className={s.table}>
      <tbody>
      <tr>
        <th className={s.firstTd}>1</th>
        <td className={s.secondTd}>English breakfast</td>
        <td className={s.allTd}>11.2</td>
        <td className={s.allTd}>3.6</td>
        <td className={s.allTd}>12</td>
        <td className={s.btn}>
          <button className={s.btnEdit}>
          <svg stroke="#B6B6B6" width="16" height="16">
        <use href={`${icon}#edit-2`} />
      </svg>
      Edit
          </button>
      </td>
      </tr>
      <tr>
        <th className={s.firstTd}>2</th>
        <td className={s.secondTd}>
          <button className={s.btnAdd}>
          <svg stroke="#E3FFA8" width="16" height="16">
        <use href={`${icon}#add`} />
      </svg>
            Record your meal</button>
          </td>
        <td className={s.allTd}></td>
        <td className={s.allTd}></td>
        <td className={s.allTd}></td>
        <td className={s.btn}></td>
      </tr>
      <tr>
        <th className={s.firstTd}>3</th>
        <td className={s.secondTd}></td>
        <td className={s.allTd}></td>
        <td className={s.allTd}></td>
        <td className={s.allTd}></td>
        <td className={s.btn}></td>
      </tr>
      <tr>
        <th className={s.firstTd}>4</th>
        <td className={s.secondTd}></td>
        <td className={s.allTd}></td>
        <td className={s.allTd}></td>
        <td className={s.allTd}></td>
        <td className={s.btn}></td>
      </tr>
      </tbody>
    </table>
        </>
    )
}

export default Table;