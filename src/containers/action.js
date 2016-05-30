import {createAction} from 'redux-actions';
import doRequest from '../components/api';

/**
 * 节假日查询
 */
export const findDate = (opts, page, rows) => {
  let _opts, _page, _rows;
  if (typeof rows == "undefined") {
    _page = opts ? opts : 1;
    _rows = page ? page : 10;
  } else {
    _opts = opts;
    _page = page;
    _rows = rows;
  }
  let opt = _opts;
  const url = `holidayCtrl/dataGrid.do?page=${_page}&rows=${_rows}`;
  return doRequest(url, opt);
};




export const ajaxGetDate = () =>{

  console.log($('html'));

  return {
    result:{
      name:'111'
    }
  };

};


export const actionNames = {
  ADD_ONE : 'ADD_ONE', // 内容+1
  FIND_DATE: 'FIND_DATE' //api获取信息
}

export const numberAddOne = createAction(actionNames.ADD_ONE);
export const getDate = createAction(actionNames.FIND_DATE, ajaxGetDate);



