# logs

This app is made for manage and store general applications logs system. It consist an api to receive information and store at Elasticsearch database.

 ### Routes

 In oder to send logs data, will pass the index params as your index at elastic search.

```
 http://localhost:3001/v1/insert/:index 
```
 #### Sample route to send logs: 
```
 http://localhost:3001/v1/insert/logs
```
### Body

Body is a mandatory field. That accept any.

#### body sample:

```
body: {
 timestamp:  "2021-01-12T02:55:55.781Z",
 description: "success",
 uniquekey: ASDFE234
}
```

### Execute

#### Getting by docker
```
docker pull fonsecalmeida/logs:tagname
```

You will need interact with elasticsearch and kibana. For that we recomend use dockercompose file below:

#### dockercompose:

```
version: '3'
services:
  dash-api:
    image: fonsecalmeida/dash-api:latest
    container_name: dash-api
    restart: always
    depends_on: 
     - elasticsearchdash
    ports:
      - '3001:3001'
    environment:
      ELASTIC_HOST: 'http://elasticsearchdash'
      ELASTC_PORT: 9200
      NODEPORT: 3001
    networks:
      - dash
      
  elasticsearchdash:
    image: 'docker.elastic.co/elasticsearch/elasticsearch:7.9.2'
    container_name: elasticsearchdash
    ports:
      - '9200:9200'
      - '9300:9300'
    environment:
      discovery.type: single-node
    networks:
      - dash
      
  kibanadash:
    image: 'docker.elastic.co/kibana/kibana:7.9.2'
    container_name: kibanadash
    ports:
      - '5601:5601'
    environment:
      ELASTICSEARCH_URL: 'http://elasticsearchdash:9200'
      ELASTICSEARCH_HOSTS: 'http://elasticsearchdash:9200'
    networks:
      - dash
networks:
  dash:
    driver: bridge
```
