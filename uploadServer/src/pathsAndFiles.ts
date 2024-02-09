import fs from "fs";
import path from "path";

export function getAllFiles(folderPath:string){
    let response: string[] = [];
    // console.log(folderPath)
    const allFilesAndFolder = fs.readdirSync(folderPath);
    allFilesAndFolder.forEach(file =>{
        const fullFilePath = path.join(folderPath, file)
        if(fs.statSync(fullFilePath).isDirectory()){
            response = response.concat(getAllFiles(fullFilePath))
        } else{
            response.push(fullFilePath)
        }
    });
    return response;
}
