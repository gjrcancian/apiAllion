import {  Response } from 'express';
import getInitialDataApi from './actions/getInitialDataApi';

const dashboardRouter =(data:any, res:Response)=>{
    console.log("chegou dashboardRouter ");


  if(data.action ==='getInitialDataApi'){
    getInitialDataApi(data, res);
  }



}
export default dashboardRouter;
