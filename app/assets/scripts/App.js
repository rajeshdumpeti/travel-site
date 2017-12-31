import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();  
new RevealOnScroll($(".feature-item"), "85%");   
new RevealOnScroll($(".testimonial"), "70%");   
var stickyHeader = new StickyHeader();