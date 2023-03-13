import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

const ResultTable = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,(res)=>{
            setData(res)
        })
    })
    return(
      <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Email</td>
                    <td>Attempts</td>
                    <td>Business Fesibility Points</td>
                    <td>Business feasibility Summary</td>
                </tr>
            </thead>
            <tbody className='table-body'>
                {!data ?? <div>No Data Found</div>}
                {
                    data.map((v,i)=>(
                    <tr key={i}>
                    <td>{v?.email || ''}</td>
                    <td>{v?.attempts || '0'}</td>
                    <td>{v?.businessfeasibilitypoints || '0'}</td>
                    <td>{v?.businessfeasibilitysummary || ""}</td>
                </tr>
                    ))
                }
                
            </tbody>
        </table>
      </div>
    )
}

export default ResultTable;