import React from 'react';
import Navbar from './Navbar';
import profile from '../assets/profile.svg';
import './styles.css';

export default function CreateForm() {

    return(
        <>
            <Navbar />
            <div className="create-form">
                <span  className="header">
                <img className="profilePic" src={profile} /><p className="create-title">What would you like to share?</p>
                </span>
                <form>
                    <div className="inner">
                        <div className="create-as">
                            <p className="create">Create as:</p>
                            <div className="hover-grow">
                            <svg width="80" height="25" viewBox="0 0 108 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="108" height="37" rx="18.5" fill="url(#paint0_linear)"/>
                                <path d="M40.464 14.288C40.464 15.136 40.264 15.936 39.864 16.688C39.464 17.44 38.824 18.056 37.944 18.536C37.064 19 35.936 19.232 34.56 19.232H31.536V26H28.8V9.32H34.56C35.84 9.32 36.92 9.544 37.8 9.992C38.696 10.424 39.36 11.016 39.792 11.768C40.24 12.52 40.464 13.36 40.464 14.288ZM34.56 17C35.6 17 36.376 16.768 36.888 16.304C37.4 15.824 37.656 15.152 37.656 14.288C37.656 12.464 36.624 11.552 34.56 11.552H31.536V17H34.56ZM48.8094 26.216C47.5614 26.216 46.4334 25.936 45.4254 25.376C44.4174 24.8 43.6254 24 43.0494 22.976C42.4734 21.936 42.1854 20.736 42.1854 19.376C42.1854 18.032 42.4814 16.84 43.0734 15.8C43.6654 14.76 44.4734 13.96 45.4974 13.4C46.5214 12.84 47.6654 12.56 48.9294 12.56C50.1934 12.56 51.3374 12.84 52.3614 13.4C53.3854 13.96 54.1934 14.76 54.7854 15.8C55.3774 16.84 55.6734 18.032 55.6734 19.376C55.6734 20.72 55.3694 21.912 54.7614 22.952C54.1534 23.992 53.3214 24.8 52.2654 25.376C51.2254 25.936 50.0734 26.216 48.8094 26.216ZM48.8094 23.84C49.5134 23.84 50.1694 23.672 50.7774 23.336C51.4014 23 51.9054 22.496 52.2894 21.824C52.6734 21.152 52.8654 20.336 52.8654 19.376C52.8654 18.416 52.6814 17.608 52.3134 16.952C51.9454 16.28 51.4574 15.776 50.8494 15.44C50.2414 15.104 49.5854 14.936 48.8814 14.936C48.1774 14.936 47.5214 15.104 46.9134 15.44C46.3214 15.776 45.8494 16.28 45.4974 16.952C45.1454 17.608 44.9694 18.416 44.9694 19.376C44.9694 20.8 45.3294 21.904 46.0494 22.688C46.7854 23.456 47.7054 23.84 48.8094 23.84ZM63.1781 26.216C62.1381 26.216 61.2021 26.032 60.3701 25.664C59.5541 25.28 58.9061 24.768 58.4261 24.128C57.9461 23.472 57.6901 22.744 57.6581 21.944H60.4901C60.5381 22.504 60.8021 22.976 61.2821 23.36C61.7781 23.728 62.3941 23.912 63.1301 23.912C63.8981 23.912 64.4901 23.768 64.9061 23.48C65.3381 23.176 65.5541 22.792 65.5541 22.328C65.5541 21.832 65.3141 21.464 64.8341 21.224C64.3701 20.984 63.6261 20.72 62.6021 20.432C61.6101 20.16 60.8021 19.896 60.1781 19.64C59.5541 19.384 59.0101 18.992 58.5461 18.464C58.0981 17.936 57.8741 17.24 57.8741 16.376C57.8741 15.672 58.0821 15.032 58.4981 14.456C58.9141 13.864 59.5061 13.4 60.2741 13.064C61.0581 12.728 61.9541 12.56 62.9621 12.56C64.4661 12.56 65.6741 12.944 66.5861 13.712C67.5141 14.464 68.0101 15.496 68.0741 16.808H65.3381C65.2901 16.216 65.0501 15.744 64.6181 15.392C64.1861 15.04 63.6021 14.864 62.8661 14.864C62.1461 14.864 61.5941 15 61.2101 15.272C60.8261 15.544 60.6341 15.904 60.6341 16.352C60.6341 16.704 60.7621 17 61.0181 17.24C61.2741 17.48 61.5861 17.672 61.9541 17.816C62.3221 17.944 62.8661 18.112 63.5861 18.32C64.5461 18.576 65.3301 18.84 65.9381 19.112C66.5621 19.368 67.0981 19.752 67.5461 20.264C67.9941 20.776 68.2261 21.456 68.2421 22.304C68.2421 23.056 68.0341 23.728 67.6181 24.32C67.2021 24.912 66.6101 25.376 65.8421 25.712C65.0901 26.048 64.2021 26.216 63.1781 26.216ZM74.3904 15.008V22.328C74.3904 22.824 74.5024 23.184 74.7264 23.408C74.9664 23.616 75.3664 23.72 75.9264 23.72H77.6064V26H75.4464C74.2144 26 73.2704 25.712 72.6144 25.136C71.9584 24.56 71.6304 23.624 71.6304 22.328V15.008H70.0704V12.776H71.6304V9.488H74.3904V12.776H77.6064V15.008H74.3904Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="-10.8" y1="5.75915e-06" x2="99.8444" y2="25.5468" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6D58C6"/>
                                <stop offset="1" stop-color="#F977A1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            </div>
                            <div className="hover-grow">
                            <svg width="80" height="25" viewBox="0 0 113 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="2.5" width="110" height="33" rx="16.5" fill="#F2F2F2" stroke="url(#paint0_linear)" stroke-width="3"/>
                                <path d="M32.296 26.168C31.176 26.168 30.168 25.976 29.272 25.592C28.376 25.192 27.672 24.632 27.16 23.912C26.648 23.192 26.392 22.352 26.392 21.392H29.32C29.384 22.112 29.664 22.704 30.16 23.168C30.672 23.632 31.384 23.864 32.296 23.864C33.24 23.864 33.976 23.64 34.504 23.192C35.032 22.728 35.296 22.136 35.296 21.416C35.296 20.856 35.128 20.4 34.792 20.048C34.472 19.696 34.064 19.424 33.568 19.232C33.088 19.04 32.416 18.832 31.552 18.608C30.464 18.32 29.576 18.032 28.888 17.744C28.216 17.44 27.64 16.976 27.16 16.352C26.68 15.728 26.44 14.896 26.44 13.856C26.44 12.896 26.68 12.056 27.16 11.336C27.64 10.616 28.312 10.064 29.176 9.68C30.04 9.296 31.04 9.104 32.176 9.104C33.792 9.104 35.112 9.512 36.136 10.328C37.176 11.128 37.752 12.232 37.864 13.64H34.84C34.792 13.032 34.504 12.512 33.976 12.08C33.448 11.648 32.752 11.432 31.888 11.432C31.104 11.432 30.464 11.632 29.968 12.032C29.472 12.432 29.224 13.008 29.224 13.76C29.224 14.272 29.376 14.696 29.68 15.032C30 15.352 30.4 15.608 30.88 15.8C31.36 15.992 32.016 16.2 32.848 16.424C33.952 16.728 34.848 17.032 35.536 17.336C36.24 17.64 36.832 18.112 37.312 18.752C37.808 19.376 38.056 20.216 38.056 21.272C38.056 22.12 37.824 22.92 37.36 23.672C36.912 24.424 36.248 25.032 35.368 25.496C34.504 25.944 33.48 26.168 32.296 26.168ZM44.4764 15.008V22.328C44.4764 22.824 44.5884 23.184 44.8124 23.408C45.0524 23.616 45.4524 23.72 46.0124 23.72H47.6924V26H45.5324C44.3004 26 43.3564 25.712 42.7004 25.136C42.0444 24.56 41.7164 23.624 41.7164 22.328V15.008H40.1564V12.776H41.7164V9.488H44.4764V12.776H47.6924V15.008H44.4764ZM55.9501 26.216C54.7021 26.216 53.5741 25.936 52.5661 25.376C51.5581 24.8 50.7661 24 50.1901 22.976C49.6141 21.936 49.3261 20.736 49.3261 19.376C49.3261 18.032 49.6221 16.84 50.2141 15.8C50.8061 14.76 51.6141 13.96 52.6381 13.4C53.6621 12.84 54.8061 12.56 56.0701 12.56C57.3341 12.56 58.4781 12.84 59.5021 13.4C60.5261 13.96 61.3341 14.76 61.9261 15.8C62.5181 16.84 62.8141 18.032 62.8141 19.376C62.8141 20.72 62.5101 21.912 61.9021 22.952C61.2941 23.992 60.4621 24.8 59.4061 25.376C58.3661 25.936 57.2141 26.216 55.9501 26.216ZM55.9501 23.84C56.6541 23.84 57.3101 23.672 57.9181 23.336C58.5421 23 59.0461 22.496 59.4301 21.824C59.8141 21.152 60.0061 20.336 60.0061 19.376C60.0061 18.416 59.8221 17.608 59.4541 16.952C59.0861 16.28 58.5981 15.776 57.9901 15.44C57.3821 15.104 56.7261 14.936 56.0221 14.936C55.3181 14.936 54.6621 15.104 54.0541 15.44C53.4621 15.776 52.9901 16.28 52.6381 16.952C52.2861 17.608 52.1101 18.416 52.1101 19.376C52.1101 20.8 52.4701 21.904 53.1901 22.688C53.9261 23.456 54.8461 23.84 55.9501 23.84ZM68.2548 14.696C68.6548 14.024 69.1828 13.504 69.8388 13.136C70.5108 12.752 71.3028 12.56 72.2148 12.56V15.392H71.5188C70.4468 15.392 69.6308 15.664 69.0708 16.208C68.5268 16.752 68.2548 17.696 68.2548 19.04V26H65.5188V12.776H68.2548V14.696ZM86.6337 12.776L78.5217 32.216H75.6897L78.3777 25.784L73.1697 12.776H76.2177L79.9377 22.856L83.8017 12.776H86.6337Z" fill="black" fill-opacity="0.25"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="-11.3" y1="1.00001" x2="103.558" y2="29.5181" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6D58C6"/>
                                <stop offset="1" stop-color="#F977A1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            </div>
                        </div>
                        <textarea placeholder="Write something about your post..." />
                        <hr />
                        <div className="create-attach">
                            <div className="hover-grow">
                            <svg width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M22.752 0H28.0024V17.25H22.752V0ZM14.0012 0H3.50031C1.40012 0 0 1.4375 0 2.875V14.375C0 15.8125 1.40012 17.25 3.50031 17.25H14.0012C16.1014 17.25 17.5015 15.8125 17.5015 14.375V8.625H12.2511V12.9375H5.25046V4.3125H17.5015V2.875C17.5015 1.4375 16.1014 0 14.0012 0ZM49.0043 4.3125V0H33.2529V17.25H38.5034V11.5H45.504V7.1875H38.5034V4.3125H49.0043Z" fill="black" fill-opacity="0.53"/>
                            </svg>
                            </div>
                            <div className="hover-grow">
                            <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M18.7068 0C13.7454 0 8.9873 1.91492 5.47909 5.32351C1.97089 8.7321 0 13.3551 0 18.1756C0.000127897 20.5625 0.48412 22.9259 1.42434 25.131C2.36456 27.3362 3.7426 29.3398 5.47978 31.0274C7.21696 32.7151 9.27925 34.0538 11.5489 34.9671C13.8186 35.8804 16.2512 36.3504 18.7078 36.3503C21.1644 36.3502 23.5969 35.8799 25.8665 34.9664C28.136 34.0529 30.1982 32.7139 31.9352 31.0261C33.6722 29.3382 35.05 27.3345 35.99 25.1293C36.93 22.9241 37.4137 20.5606 37.4136 18.1737C37.4136 8.13737 29.0364 0 18.7068 0ZM18.7068 32.5627C16.7478 32.5846 14.8038 32.2285 12.9875 31.5153C11.1711 30.802 9.51844 29.7457 8.12522 28.4074C6.732 27.0692 5.6259 25.4757 4.87099 23.7192C4.11608 21.9627 3.72737 20.0781 3.72737 18.1747C3.72737 16.2712 4.11608 14.3866 4.87099 12.6301C5.6259 10.8736 6.732 9.28012 8.12522 7.9419C9.51844 6.60367 11.1711 5.54733 12.9875 4.83406C14.8038 4.12078 16.7478 3.76475 18.7068 3.78659C20.6658 3.76475 22.6097 4.12078 24.4261 4.83406C26.2425 5.54733 27.8951 6.60367 29.2884 7.9419C30.6816 9.28012 31.7877 10.8736 32.5426 12.6301C33.2975 14.3866 33.6862 16.2712 33.6862 18.1747C33.6862 20.0781 33.2975 21.9627 32.5426 23.7192C31.7877 25.4757 30.6816 27.0692 29.2884 28.4074C27.8951 29.7457 26.2425 30.802 24.4261 31.5153C22.6097 32.2285 20.6658 32.5846 18.7068 32.5627ZM13.8372 17.7023C15.4506 17.7023 16.7582 16.2198 16.7582 14.389C16.7582 12.5582 15.4487 11.0758 13.8352 11.0758C12.2218 11.0758 10.9123 12.5582 10.9123 14.389C10.9123 16.2198 12.2218 17.7023 13.8372 17.7023ZM23.5784 17.7023C25.1938 17.7023 26.5013 16.2198 26.5013 14.389C26.5013 12.5582 25.1918 11.0758 23.5784 11.0758C21.9649 11.0758 20.6554 12.5601 20.6554 14.389C20.6554 16.2179 21.9649 17.7023 23.5784 17.7023ZM27.1658 20.7051C26.8218 20.5365 26.4236 20.5055 26.0565 20.6187C25.6893 20.732 25.3824 20.9805 25.2016 21.3109C25.1353 21.4359 23.5082 24.3269 18.7087 24.3269C13.9327 24.3269 12.2958 21.4624 12.214 21.3128C12.0388 20.9766 11.7333 20.7218 11.3648 20.6045C10.9962 20.4871 10.5948 20.5168 10.2488 20.6871C9.90279 20.8573 9.64055 21.1541 9.51977 21.5122C9.399 21.8702 9.42957 22.2603 9.60477 22.5965C9.7022 22.7839 12.0367 27.1669 18.7087 27.1669C25.3828 27.1669 27.7133 22.782 27.8088 22.5946C27.9805 22.261 28.0092 21.8749 27.8887 21.5208C27.7682 21.1667 27.5083 20.8734 27.1658 20.7051Z" fill="black" fill-opacity="0.53"/>
                            </svg>
                            </div>
                            <div className="hover-grow">
                            <svg width="41" height="38" viewBox="0 0 41 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M40.4953 33.5108L37.5557 25.9171H34.3302L36.1214 33.322H4.5843L6.37555 25.9171H3.15001L0.208324 33.5108C-0.53785 35.4434 0.784619 37.0244 3.15001 37.0244H37.5557C39.9211 37.0244 41.2436 35.4434 40.4953 33.5108ZM31.1046 9.2561C31.1046 6.80123 29.9719 4.4469 27.9555 2.71105C25.9392 0.975193 23.2044 0 20.3529 0C17.5013 0 14.7666 0.975193 12.7502 2.71105C10.7339 4.4469 9.60108 6.80123 9.60108 9.2561C9.60108 18.0957 20.3529 27.7683 20.3529 27.7683C20.3529 27.7683 31.1046 18.0957 31.1046 9.2561ZM14.5469 9.36717C14.5469 6.607 17.1445 4.37073 20.3529 4.37073C21.8924 4.37073 23.3689 4.89724 24.4575 5.83442C25.5462 6.77161 26.1578 8.04271 26.1578 9.3681C26.1578 10.6935 25.5462 11.9646 24.4575 12.9018C23.3689 13.839 21.8924 14.3655 20.3529 14.3655C18.813 14.3655 17.3363 13.8389 16.2474 12.9015C15.1586 11.9641 14.5469 10.6928 14.5469 9.36717Z" fill="black" fill-opacity="0.53"/>
                            </svg>
                            </div>
                            <div className="hover-grow">
                            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.6006 35.3064H3.82508V9.29116H21.0379V5.5747H3.82508C1.72128 5.5747 0 7.2471 0 9.29116V35.3064C0 37.3505 1.72128 39.0229 3.82508 39.0229H30.6006C32.7044 39.0229 34.4257 37.3505 34.4257 35.3064V18.5823H30.6006V35.3064ZM15.7019 29.4158L11.9534 25.0304L6.69388 31.5899H27.7318L20.9614 22.8377L15.7019 29.4158ZM34.4257 5.5747V0H30.6006V5.5747H24.863C24.8821 5.59328 24.863 9.29116 24.863 9.29116H30.6006V14.8473C30.6197 14.8659 34.4257 14.8473 34.4257 14.8473V9.29116H40.1633V5.5747H34.4257Z" fill="url(#paint0_linear)"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="-4.01633" y1="6.07402e-06" x2="39.0386" y2="3.50525" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6D58C6"/>
                                <stop offset="1" stop-color="#F977A1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div className='post-btn-cntn'>
                        <button className="post-sub" type="submit">
                            <svg className="post-btn" width="170" height="35" viewBox="0 0 204 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="204" height="48" rx="24" fill="url(#paint0_linear)"/>
                                <path d="M89.464 21.288C89.464 22.136 89.264 22.936 88.864 23.688C88.464 24.44 87.824 25.056 86.944 25.536C86.064 26 84.936 26.232 83.56 26.232H80.536V33H77.8V16.32H83.56C84.84 16.32 85.92 16.544 86.8 16.992C87.696 17.424 88.36 18.016 88.792 18.768C89.24 19.52 89.464 20.36 89.464 21.288ZM83.56 24C84.6 24 85.376 23.768 85.888 23.304C86.4 22.824 86.656 22.152 86.656 21.288C86.656 19.464 85.624 18.552 83.56 18.552H80.536V24H83.56ZM97.8094 33.216C96.5614 33.216 95.4334 32.936 94.4254 32.376C93.4174 31.8 92.6254 31 92.0494 29.976C91.4734 28.936 91.1854 27.736 91.1854 26.376C91.1854 25.032 91.4814 23.84 92.0734 22.8C92.6654 21.76 93.4734 20.96 94.4974 20.4C95.5214 19.84 96.6654 19.56 97.9294 19.56C99.1934 19.56 100.337 19.84 101.361 20.4C102.385 20.96 103.193 21.76 103.785 22.8C104.377 23.84 104.673 25.032 104.673 26.376C104.673 27.72 104.369 28.912 103.761 29.952C103.153 30.992 102.321 31.8 101.265 32.376C100.225 32.936 99.0734 33.216 97.8094 33.216ZM97.8094 30.84C98.5134 30.84 99.1694 30.672 99.7774 30.336C100.401 30 100.905 29.496 101.289 28.824C101.673 28.152 101.865 27.336 101.865 26.376C101.865 25.416 101.681 24.608 101.313 23.952C100.945 23.28 100.457 22.776 99.8494 22.44C99.2414 22.104 98.5854 21.936 97.8814 21.936C97.1774 21.936 96.5214 22.104 95.9134 22.44C95.3214 22.776 94.8494 23.28 94.4974 23.952C94.1454 24.608 93.9694 25.416 93.9694 26.376C93.9694 27.8 94.3294 28.904 95.0494 29.688C95.7854 30.456 96.7054 30.84 97.8094 30.84ZM112.178 33.216C111.138 33.216 110.202 33.032 109.37 32.664C108.554 32.28 107.906 31.768 107.426 31.128C106.946 30.472 106.69 29.744 106.658 28.944H109.49C109.538 29.504 109.802 29.976 110.282 30.36C110.778 30.728 111.394 30.912 112.13 30.912C112.898 30.912 113.49 30.768 113.906 30.48C114.338 30.176 114.554 29.792 114.554 29.328C114.554 28.832 114.314 28.464 113.834 28.224C113.37 27.984 112.626 27.72 111.602 27.432C110.61 27.16 109.802 26.896 109.178 26.64C108.554 26.384 108.01 25.992 107.546 25.464C107.098 24.936 106.874 24.24 106.874 23.376C106.874 22.672 107.082 22.032 107.498 21.456C107.914 20.864 108.506 20.4 109.274 20.064C110.058 19.728 110.954 19.56 111.962 19.56C113.466 19.56 114.674 19.944 115.586 20.712C116.514 21.464 117.01 22.496 117.074 23.808H114.338C114.29 23.216 114.05 22.744 113.618 22.392C113.186 22.04 112.602 21.864 111.866 21.864C111.146 21.864 110.594 22 110.21 22.272C109.826 22.544 109.634 22.904 109.634 23.352C109.634 23.704 109.762 24 110.018 24.24C110.274 24.48 110.586 24.672 110.954 24.816C111.322 24.944 111.866 25.112 112.586 25.32C113.546 25.576 114.33 25.84 114.938 26.112C115.562 26.368 116.098 26.752 116.546 27.264C116.994 27.776 117.226 28.456 117.242 29.304C117.242 30.056 117.034 30.728 116.618 31.32C116.202 31.912 115.61 32.376 114.842 32.712C114.09 33.048 113.202 33.216 112.178 33.216ZM123.39 22.008V29.328C123.39 29.824 123.502 30.184 123.726 30.408C123.966 30.616 124.366 30.72 124.926 30.72H126.606V33H124.446C123.214 33 122.27 32.712 121.614 32.136C120.958 31.56 120.63 30.624 120.63 29.328V22.008H119.07V19.776H120.63V16.488H123.39V19.776H126.606V22.008H123.39Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear" x1="-20.4" y1="7.47133e-06" x2="177.384" y2="66.4912" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#6D58C6"/>
                                <stop offset="1" stop-color="#F977A1"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}