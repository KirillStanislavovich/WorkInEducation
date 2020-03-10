import '../css/index.css';
import {nowDate} from '../Now_Date_module/Now_Date';
import {codeCheck} from '../Code_module/code';
import {todoList} from '../Todo_module/todo';
import {textEditor} from '../TextEdit_module/text_edit';
import {yanTrans} from '../YandexTrans_module/trans';

nowDate('.date');
codeCheck();
todoList();
textEditor();
yanTrans();