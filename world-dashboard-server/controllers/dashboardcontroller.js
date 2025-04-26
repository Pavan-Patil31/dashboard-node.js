import { sequelize } from "../config/db.js"


//total population
export const getTotalPopulation = async(req,res)=>{
try {
    const q1= `SELECT SUM(Population) AS TotalPopulation FROM country` 
    const totalPopulation = await sequelize.query(q1);
    // console.log(totalPopulation);
    const tp = totalPopulation[0];
    const tp1 = tp[0].TotalPopulation
    // clg(tp1)
    res.status(200).send(tp1)
    // res.status(200).send({totalPopulation:totalPopulation[0],success:true})
} catch (error) {
    res.status(500).send({error:error})
}
}



//top 10 populated countries 
export const getTop10PopulatedCountries = async(req,res)=>{
    try {
        const q2= `SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10` 
        const Top10PopulatedCountries = await sequelize.query(q2);
        console.log(Top10PopulatedCountries);
        res.status(200).send({data:Top10PopulatedCountries,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }

}

//top 10 least populated countries
export const getTop10LeastPopulatedCountries = async(req,res)=>{
     try {
        const q3= `SELECT Name, Population FROM country ORDER BY Population ASC LIMIT 10` 
        const Top10LeastPopulatedCountries = await sequelize.query(q3);
        console.log( Top10LeastPopulatedCountries);
        res.status(200).send({data :Top10LeastPopulatedCountries,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
}



//total countries
export const getTotalCountries = async (req,res)=>{
    try {
        const q4= `select count(Code) as totalCountry from country;` 
        const totalCountries = await sequelize.query(q4)
        const TC = totalCountries[0];
        const TCValue = TC[0]
        res.status(200).send(TCValue.totalCountry)
        // res.status(200).send({data:totalCountries[0],success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }

}

//average population
export const getAveragePopulation =async (req,res)=>{
    try {
        const q5 = `SELECT AVG(population) AS average_population FROM country`;

        const averagePopulation = await sequelize.query(q5)
        res.status(200).send({data:averagePopulation,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }

}

//population by continent
export const getTotalPopulationByContinent = async (req,res)=>{
    try {
        const q6= `select Continent, sum(Population) as CPopulation from country group by Continent;` 
        const totalPopulationByContinent = await sequelize.query(q6);
        const tPopByCont = totalPopulationByContinent[0];
        console.log(tPopByCont);
        res.status(200).send(tPopByCont)
        // res.status(200).send({data:totalPopulationByContinent,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }

}
//total languages
export const getTotalLanguages = async(req,res)=>{
    try {
        const q7= `SELECT COUNT(DISTINCT Language) AS total_languages FROM countrylanguage`; 
        const TotalLanguage = await sequelize.query(q7);
        res.status(200).send({data:TotalLanguage,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
}
// export const getTop10Languages = (req,res)=>{
//     res.send("hello")

// }

export const getTop10Languages = async (req, res) => {
    try {
        const q8 = `
            SELECT cl.Language, 
                   SUM(c.Population * cl.Percentage / 100) AS total_speakers
            FROM countrylanguage cl
            JOIN country c ON cl.CountryCode = c.Code
            GROUP BY cl.Language
            ORDER BY total_speakers DESC
            LIMIT 10;
        `;
        const topLanguages = await sequelize.query(q8);
        res.status(200).send({ data: topLanguages[0], success: true });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

export const getLargestCities = async(req,res)=>{
    try {
        const q7= `SELECT Name,Population from city order by Population Desc limit 10`; 
        const TotalLanguage = await sequelize.query(q7);
        res.status(200).send({largetCities:TotalLanguage,success:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
   
}