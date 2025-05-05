import { Application } from './app/app';
import { Operator } from './operator/operator';
import './style.scss';

const app = new Application(new Operator());
app.createUI();
