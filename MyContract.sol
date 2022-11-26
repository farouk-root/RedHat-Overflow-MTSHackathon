pragma solidity ^0.4.18;     

// Creating a contract
contract MyContract
{
    string name;
    string linkedin;
    string github;
    string facebook;
    
    function  setName(string link) public
    {
        name= link;
        
    }
    function  setLinkedin(string link) public
    {
        linkedin=link;
    }
    function  setGithub(string link) public
    {
        github=link;
    }
    function setFacebook(string link) public
    {
        facebook=link;
    }

    function getUserInfo() public view returns (string,string,string,string)
    {
        return (name,linkedin,github,facebook);
    }
}


