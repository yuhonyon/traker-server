const Controller = require('egg').Controller;
const { request, summary, query, path, body, tags ,description,responses}=require('egg-swagger-decorator');
const group = tags(['页面分析']);



class PageController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.session = ctx.session;
    }

    async index() {

    }

    async findOrCreate() {
        const ctx = this.ctx;
        const { data = [] } = ctx.request.body;
        ctx.body = await ctx.service.findOrCreate(data);
    }
    

    async detail() {
        const ctx = this.ctx;
        const { id, pageId } = ctx.query; 
    }

    

    
}

module.exports = PageController;