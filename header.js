export default () => {return {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
}}