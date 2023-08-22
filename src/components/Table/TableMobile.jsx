import React from 'react';
import s from './TableMobile.module.css';
import { PiPencilLineLight } from 'react-icons/pi';
import { BsPlus } from 'react-icons/bs';

const TableMobile = () => {
  return (
    <>
      <table className={s.table}>
        <tbody>
          <tr>
            <th>1</th>
            <td className={s.secondTd}>English breakfast</td>
            <td className={s.btn}>
              <button className={s.btnEdit}>
                <PiPencilLineLight size="1rem" />
                Edit
              </button>
            </td>
          </tr>
          <tr className={s.colspanTR}>
            <td colSpan={3} className={s.colspanTD}>
              Carb. 11.2 Prot. 3.6 Fat. 12
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>
              <button className={s.btnAdd}>
                <BsPlus size="1rem" />
                Record your meal
              </button>
            </td>
            <td></td>
          </tr>
          <tr className={s.colspanTR}>
            <td colSpan={3} className={s.colspanTD}></td>
          </tr>
          <tr>
            <th>3</th>
            <td></td>
            <td></td>
          </tr>
          <tr className={s.colspanTR}>
            <td colSpan={3} className={s.colspanTD}></td>
          </tr>
          <tr>
            <th>4</th>
            <td></td>
            <td></td>
          </tr>
          <tr className={s.colspanTR}>
            <td colSpan={3} className={s.colspanTD}></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableMobile;
