import $ from 'jquery'; 
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import PageBanner from './modules/PageBanner';
import Modal from './modules/Modal';
import Info from './modules/Info';
import scroll from './modules/scroll';





 


new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".prices"), "85%");
new RevealOnScroll($(".thumbnails"), "65%");

var mobileMenu = new MobileMenu(); 
var stickyHeader = new StickyHeader();
var modal = new Modal();
var info = new Info();
var pageBanner = new PageBanner();
var Scroll = new scroll();




 