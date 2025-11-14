import { expect } from '@playwright/test';
import { userData } from '../utils/test';
// ...existing code...
export class AdminPage{
    constructor(page){
        this.page = page;
        this.admin = "//span[normalize-space()='Admin']";
        this.add = '//div[@class="orangehrm-header-container"]//button';
        this.dropdown = '//label[normalize-space()="User Role"]/../following-sibling::div//div[contains(@class,"oxd-select-text")]';
        this.dropdown2 = '//label[normalize-space()="Status"]/../following-sibling::div//div[contains(@class,"oxd-select-text")]';
        this.option = (text) => `//div[@role="option" and normalize-space(.)="${text}"]`;
        this.input = '//input[@placeholder="Type for hints..."]';
        this.suggestion = (name) => `//div[@role="listbox"]//span[normalize-space(.)="${name}"]`;
        this.input2 = '//div[contains(@class,"oxd-form-row")]//input[contains(@class,"oxd-input")]';
        this.pass = "(//input[@type='password'])[1]";
        this.passc = "(//input[@type='password'])[2]";
        this.Submitform = "//button[normalize-space()='Save']";
    }
    async action(){
        await this.page.click(this.admin);
        await this.page.click(this.add);
    }
    async perform(){
        await this.page.click(this.dropdown);
        await this.page.click(this.option('Admin'));
        await this.page.click(this.dropdown2);
        await this.page.click(this.option('Enabled'));
    }
    async dynamic(){
        await this.page.fill(this.input, "P");
        await this.page.click(this.suggestion("Peter Mac Anderson"));
    }
    async fillForm(){
        await this.page.fill(this.input2, "Samuelson");
        await this.page.fill(this.pass, "Admin@123");
        await this.page.fill(this.passc, "Admin@123");
        await Promise.all([
           this.page.waitForTimeout(2000),
           this.page.click(this.Submitform)
        ]);
       // await this.page.waitForFunction(() => document.body.innerText.includes("Success"));

    }

}
// ...existing code...