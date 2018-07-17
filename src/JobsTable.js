import React from 'react'
import JobRow from './JobRow'

const JobsTable = (props) => {
    // const jobs = props.data.jobs
    const { jobs } = props.data
    // console.log(jobs)
    return (
        <div className="JobsTable">
       <table>
           <thead>
               <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Remote</th>
                    <th>Benefits</th>
                </tr>
           </thead>
           <tbody>
            {jobs.map((j, i) => {
                return <JobRow key={i} job={j} />
            })}
            </tbody>
        </table>
        </div>
    )
}

export default JobsTable