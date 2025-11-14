import { expect } from '@playwright/test';

export class loginpagei{
    constructor(page){
        this.page=page;
        this.name='[name="username"]';
        this.password='[name="password"]';
        this.loginbtn='[type="submit"]';
    }
    async navi(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    }
    async actions(name,pass){
        await this.page.fill(this.name,name);
        await this.page.fill(this.password,pass);
        await this.page.click(this.loginbtn);

    }
    async verify(){
        await expect(this.page).toHaveURL(/dashboard/);
    }
}