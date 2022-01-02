const db=require('./db')
const Query={
    jobs:()=>db.jobs.list(),
    job:(root,args)=>db.jobs.get(args.id),
    company:(root,args)=>db.companies.get(args.id),
    companies:()=>db.companies.list()
}
const Job={
    company:(job)=>db.companies.get(job.companyId)
}
const Company={
    jobs:(company)=>db.jobs.list().filter(job=>job.companyId===company.id)
}
module.exports={
    Query,Job,Company
}
