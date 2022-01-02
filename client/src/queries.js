export const Queries = {
    jobs: `{
  jobs {
    id
    title
    description
  }
}`,
    job: `query JobQuery($id:ID!){
  job(id:$id) {
    id
    title
    description
    company{
    id name
    }
  }
}`,
    company: `
    query CompanyQuery($id:ID!)  {
company(id:$id){
  id name description jobs{
  id,title
  }
}
}`
}
