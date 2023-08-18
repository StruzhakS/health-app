import React from 'react';
import icon from '../../assets/icons/symbol-defs.svg';
import s from './TableMobile.module.css';

const TableMobile = ()=>{
    return(
        <>
        <table className={s.table}>
      <tbody>
      <tr>
        <th>1</th>
        <td className={s.secondTd}>English breakfast</td>
        <td className={s.btn}>
          <button className={s.btnEdit}>
          <svg stroke="#B6B6B6" width="16" height="16">
        <use href={`${icon}#edit-2`} />
      </svg>
      Edit
          </button>
      </td>
      </tr>
      <tr  className={s.colspanTR}>
        <td colSpan={3} className={s.colspanTD}>Carb. 11.2   Prot. 3.6   Fat. 12</td>
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
      </tr>
      <tr  className={s.colspanTR}>
        <td colSpan={3} className={s.colspanTD}></td>
      </tr>
      <tr>
        <th>3</th>
        <td></td>
        <td></td>
      </tr>
      <tr  className={s.colspanTR}>
        <td colSpan={3} className={s.colspanTD}></td>
      </tr>
      <tr>
        <th>4</th>
        <td></td>
        <td></td>
      </tr>
      <tr  className={s.colspanTR}>
        <td colSpan={3} className={s.colspanTD}></td>
      </tr>
      </tbody>
    </table>
        </>
    )
}

export default TableMobile;