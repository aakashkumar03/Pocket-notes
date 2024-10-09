export const formatTimestamp=(timestamp)=>{
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const minutesPadded = minutes < 10 ? '0' + minutes : minutes;
  return `${day} ${month} ${year}  •  ${hour12}:${minutesPadded} ${ampm}`;
}

export const addDatatoLocalStorage = (key,data)=>{
  return localStorage.setItem(key, JSON.stringify(data));
}

export const getDataFromLocalStorage = (data)=>{
  return JSON.parse(localStorage.getItem(data))
}

export const demoObj= { 
  id:0,
  groupName: '', 
  color: '', 
  initial: '',
  notes:[]
}

export const getInitials=(str)=> {
  const words = str.split(' ');
  if (words.length === 1) {
    return str.slice(0, 1).toUpperCase();
  }
  const initials = words.slice(0, 2).map(word => word[0].toUpperCase()).join('');
  return initials;
}

export const getNoteName=(str)=>{
  return str[0].toLocaleUpperCase() + str.slice(1).toLowerCase()
}

export const getUserKey=(str)=>{
  return str.toLowerCase().replace(/\s+/g, '');
}