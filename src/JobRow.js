import React from 'react'

const JobRow = (props) => {
    const { job } = props
    return (
    <tr>
        <td>{job.company}</td>
        <td>{job.position}</td>
        <td>{job.salary}</td>
        <td>{job.remote? "✔︎" : "✘"}</td>
        <td>{job.benefits? "✔︎" : "✘"}</td>
    </tr>
    )
}

export default JobRow