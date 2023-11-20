import { NoteType } from "../components/NoteType";

export const createRequest = async (options: {
    url: string, 
    sendMethod: string, 
    id?: number, 
    data?: NoteType, 
    callback: (data: NoteType[]) => void
  }) => {

    let strRequest = `${options.url}/`;
    if (options.id) {
      strRequest += `${options.id}`;
    }
  
    if (options.sendMethod === 'GET') {
      fetch(strRequest)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          options.callback(data);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else if (options.sendMethod === 'POST') {
      fetch(strRequest, {
        method: 'POST',
        body: JSON.stringify(options.data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          options.callback(data);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    } else if (options.sendMethod === 'DELETE') {
      fetch(strRequest, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          options.callback(data);
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  };
  