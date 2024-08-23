import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
let count=0;
function calculate()
{
  function days()
    {
        let startdate=document.getElementById('pick').value;
        let enddate=document.getElementById('end').value;
        let start=new Date(startdate);
        let startday=start.getDate();
        let startmonth=start.getMonth();
        let startyear=start.getFullYear();
        let extend=new Date(enddate);
        let extendday=extend.getDate();
        let extendmonth=extend.getMonth();
        let extendyear=extend.getFullYear();
        if(startyear==extendyear)
        {
            let leftday=0,remainday=0;
            if(startyear%4==0)
            {
                let mon=[31,29,31,30,31,30,31,31,30,31,30,31];
                for(let i=startmonth+1;i<extendmonth;++i)
                {
                    leftday+=mon[i];
                    if(startmonth==i-1)
                    {
                        remainday=mon[i-1]-startday;
                    }

                }
                return leftday+remainday+extendday+1;
            }
            else
            {
                let mon=[31,28,31,30,31,30,31,31,30,31,30,31];
                for(let i=startmonth+1;i<extendmonth;++i)
                {
                    leftday+=mon[i];
                    if(startmonth==i-1)
                    {
                        remainday=mon[i-1]-startday;
                    }

                }
                return leftday+remainday+extendday+1;

            }
        }
        else
        {
            let leftday=0,remainday=0;
            function counttime(startyear,extendyear)
            {
                let i=startyear;
                while(i<extendyear)
                    {
                        
                        
                        ++i;
                        count+=1;
                    }
                return count;
            }
            if(startyear<extendyear)
            {
                
                for(let i=startyear;i<extendyear;++i)
                {
                    
                    
                   if(startmonth<extendmonth)
                    {
                        if(i%4==0)
                        {
                            let mon=[31,29,31,30,31,30,31,31,30,31,30,31];
                            for(let i=startmonth+1;i<extendmonth;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                            {
                              remainday=mon[i-1]-startday;
                            }

                            }
                            count=counttime(startyear,extendyear);
                           return leftday+remainday+extendday+365*parseInt(count)+1;
                           
                        }
                        else
                        {
                            let mon=[31,28,31,30,31,30,31,31,30,31,30,31];
                            for(let i=startmonth+1;i<extendmonth;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                              {
                                remainday=mon[i-1]-startday;
                              }

                              }
                              count=counttime(startyear,extendyear);
                             return leftday+remainday+extendday+365*parseInt(count);
                             
                        }

                    }
                    else
                    {
                        let n=0;
                        if(i%4==0)
                        {
                           let mon=[31,29,31,30,31,30,31,31,30,31,30,31];
                           for(let i=startmonth+1;i<12;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                              {
                                remainday=mon[i-1]-startday;
                              }

                            }
                            for(let i=0;i<extendmonth;++i)
                            {
                                n+=mon[i];
                            }
                            count=counttime(startyear,extendyear)-1;
                            return leftday+remainday+extendday+365*parseInt(count)+n;
                        }
                        else
                        {
                            let mon=[31,28,31,30,31,30,31,31,30,31,30,31];
                           for(let i=startmonth+1;i<12;++i)
                            {
                              leftday+=mon[i];
                              if(startmonth==i-1)
                              {
                                remainday=mon[i-1]-startday;
                              }

                            }
                            for(let i=0;i<extendmonth;++i)
                            {
                                n+=mon[i]
                            }
                            count=counttime(startyear,extendyear)-1;
                            return leftday+remainday+extendday+365*parseInt(count)+n;

                        }

                    }
                    
                }
            }
        }

    }
    function interest()
    {
        let amount=document.getElementById('amt').value;
        let amt=parseFloat(amount);
        let rate=document.getElementById('rt').value;
        let r=parseFloat(rate);
        let total=parseInt(days());
        if(total>365)
        {
            let count=0;
            while(total>365)
            {
                count+=1;
                total-=365;
            }
            for(let i=count;i>0;--i)
            {
                amt+=(amt*r*365)/3000;
            }
            amt+=(amt*r*total)/3000;
            return amt;
        }
        else
        {
            amt+=(amt*r*total)/3000;
            return amt;
        }
        
    }
    document.getElementById('out').innerHTML=interest();
}
function Myform()
{
  const [date1, setName] = useState("");
  const [date2, setName2]=useState(""); 
  const [num,setNum]=useState(0.0);
  const [num2,setNum2]=useState(0.0);

  return (
    <div>
        <label for="firstdate">Pick Date</label><br />
        <input type="date" name="pickdate" id="pick" value={date1} onChange={(e)=>setName(e.target.value)}/>
        <br />
        <label for="enddate">End Date</label><br />
        <input type="date" name="enddate" id="end" value={date2} onChange={(e)=>setName2(e.target.value)}/>
        <br />
        <label for="amount">Amount</label><br />
        <input type="number" name="amount" id="amt" value={num} onChange={(e)=>setNum(e.target.value)}/>
        <br />
        <label for="rate">Rate in RS</label><br />
        <input type="text" name="rate" id="rt" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
        <br />
        <button onClick={calculate}>Calculate</button>
        <br />
        <label>Result</label>
        <p id="out"></p>
        </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Myform />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
