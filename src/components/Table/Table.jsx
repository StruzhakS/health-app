import React from 'react';
import icon from '../../assets/icons/symbol-defs.svg';
import s from './Table.module.css';


const Table = ()=>{
    return(
        <>
        <table className={s.table}>
      <tbody>
      <tr>
        <th>1</th>
        <td className={s.secondTd}>English breakfast</td>
        <td>11.2</td>
        <td>3.6</td>
        <td>12</td>
        <td>
          <button className={s.btnEdit}>
          <svg stroke="#B6B6B6" width="16" height="16">
        <use href={`${icon}#edit-2`} />
      </svg>
      Edit
          </button>
      </td>
      </tr>
      <tr>
        <th>2</th>
        <td>
          <button className={s.btnAdd}>
          <svg stroke="#E3FFA8" width="16" height="16">
        <use href={`${icon}#add`} />
      </svg>
            Record your meal</button>
          </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>3</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>4</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
        </>
    )
}

export default Table;