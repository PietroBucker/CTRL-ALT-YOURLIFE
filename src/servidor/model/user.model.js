import connection from "./connection.js";

export const findAll = async () => {
    const [response] = await connection.execute(
        `SELECT u.nome, u.sobre_nome, u.foto_url, c.linkedin, c.github, c.email, i.descricao, i.stacks  
         FROM usuario u
         INNER join contato c on u.id = c.id
         INNER join informacao i on i.id = u.id;`,
    );
    // console.log(teste);
    return response;
}


export const insertUser = async (body) => {
    const { nome, sobre_nome, foto_url, linkedin, github, email, descricao, stacks } = body;

    const [insertUser] = await connection.execute(
        `INSERT INTO usuario(nome, sobre_nome, foto_url) 
        VALUES (?, ?, ?)`,
        [nome, sobre_nome, foto_url]
    );
    console.log(insertUser.insertId);
    await connection.execute(
        `INSERT INTO contato(id, linkedin, github, email) 
        VALUES (?, ?, ?, ?)`,
        [insertUser.insertId, linkedin, github, email]
    );

    await connection.execute(
        `INSERT INTO informacao(id, descricao, stacks) 
        VALUES (?, ?, ?)`,
        [insertUser.insertId, descricao, stacks]
    );

    // console.log(teste);
    return insertUser.affectedRows;
}

// export const insertDicas = async (body) => {
//     const { titulo, descricao, url, usuario_id } = body;

//     const [insertDicas] = await connection.execute( 
//         `INSERT INTO dicas(titulo, descricao, url, usuario_id) 
//         VALUES (?, ?, ?, ?)`,
//         [titulo, descricao, url, usuario_id]
//     );
//     return insertDicas.affectedRows;
// }