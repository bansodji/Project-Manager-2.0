import * as fs from "fs";

export default async function handler(req, res) {
    const query = req.query

    let data = await fs.promises.readdir("database/");
    let myFile;

    let output = await calculateRead(data, query, myFile)

    res.status(200).json(output)
}

const calculateRead = async (data, query, myFile) => {
    for (let file of data) {
        if (query.name == file.split(".")[0]) {
            if ('id' in query) {
                const id = query.id
                myFile = await fs.promises.readFile(('database/' + file), 'utf-8')
                for (let x of JSON.parse(myFile)) {
                    if (id == 0) {
                        myFile = await fs.promises.readFile(('database/' + file), 'utf-8')
                        return JSON.parse(myFile);
                    }
                    else if (id == x.id) {
                        return x;
                    }
                    else {
                        return {key: "No data found"}
                    }
                }
            }
            else {
                myFile = await fs.promises.readFile(('database/' + file), 'utf-8')
                return JSON.parse(myFile)
            }
        }
    }
}