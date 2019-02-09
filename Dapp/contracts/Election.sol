pragma solidity ^0.5.0;

contract Election {
    // Model a Candidate for first past the post system
    struct Candidatepost {
        uint id;
        string name;
        uint voteCount;
    }

    // Model as candidate for proportional party system
    struct Candidateparty {
        uint id;
        string name;
        uint voteCount;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Store Candidates
    // Fetch Candidate
    mapping(uint => Candidatepost) public cand_post;

    mapping(uint => Candidateparty) public cand_party;

    // Store Candidates Count
    uint public partyCount;
    uint public postCount;
    

    constructor () public {
        addpostCandidate("Candidate 1");
        addpostCandidate("Candidate 2");
        addpartyCandidate("Candidate 1");
        addpartyCandidate("Candidate 2");
    }

    function addpostCandidate (string memory _name) private {
        postCount ++;
        cand_post[postCount] = Candidatepost(postCount, _name, 0);
    }


    function addpartyCandidate (string memory _name) private {
        partyCount ++;
        cand_party[partyCount] = Candidateparty(partyCount, _name, 0);
    }
    // voted event
    event votedEvent (
        uint indexed _candidateId1,
        uint indexed _candidateId2
    );


    function vote (uint _candidateId1, uint _candidateId2) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId1 > 0 && _candidateId1 <= postCount && _candidateId2 > 0 && _candidateId2 <= partyCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        cand_post[_candidateId1].voteCount ++;
        cand_party[_candidateId2].voteCount ++;


        // trigger voted event
        emit votedEvent(_candidateId1, _candidateId2);
    }


}
