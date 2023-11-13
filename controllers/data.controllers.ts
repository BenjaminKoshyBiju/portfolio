import {skills,keywords} from '../models/skills';
import edu from '../models/education';
import work from '../models/work';
import { Request,Response } from "express";


function home (req:Request,res:Response){
   

    res.render('./home',{
        skills:skills,
        keywords:keywords,
        edu:edu,
        work:work
    });
    
}

function projects(req:Request<{slug:string}>,res:Response){

    const skill=skills.filter((e)=>{
        return e.slug==req.params.slug
        
        })
    res.render('./work',{
        framework:skill[0].framework,
        project_title:skill[0].project_title,
        desc:skill[0].description,
        skl1:skill[0].tool1,
        skl2:skill[0].tool2,
        skl3:skill[0].tool3,
        skl4:skill[0].tool4,
        img:skill[0].img,
        img1:skill[0].img1,
        img2:skill[0].img2,
        img3:skill[0].img3,
        link:skill[0].link

        

    });
    
}

export {home,projects}